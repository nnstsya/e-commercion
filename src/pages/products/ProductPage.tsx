import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductData } from "@/types/ProductData";
import { Box, Theme } from "@mui/system";
import { ProductImages } from "@/components/ProductImages";
import "../../app/page.sass";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import { DarkTheme } from "@/themes/DarkTheme";
import { ThemeProvider } from "@mui/material/styles";
import "@/app/globals.sass";
import { LightTheme } from "@/themes/LightTheme";
import { ChangeThemeIcon } from "@/components/ChangeThemeIcon";
import { HandleChangeMode } from "@/hooks/HandleChangeMode";
import { ProductRating } from "@/components/ProductRating";

export default function ProductPage(): React.JSX.Element {
  const router = useRouter();
  const receivedData = router.query.data;
  const [product, setProduct] = useState<ProductData | null>(null);
  const { isDarkMode, setIsDarkMode, toggleTheme } = HandleChangeMode();
  let salePrice = "";

  if (product) {
    salePrice = Math.round(
      product.price - (product.price / 100) * product.discountPercentage,
    ).toString();
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof receivedData === "string" && receivedData) {
        const parsedProduct = JSON.parse(decodeURIComponent(receivedData));
        setProduct(parsedProduct.product);
        setIsDarkMode(parsedProduct.isDarkMode);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [receivedData]);

  return (
    <Box className={inter.className}>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        {product && (
          <Box
            className={"product-page-container"}
            color={"text.primary"}
            bgcolor={(theme) => theme.palette.background.default}
          >
            <Box
              className={"page-header"}
              sx={(theme: Theme) => ({
                boxShadow: (theme.shadows as string[])[1],
                backgroundColor: (theme) => theme.palette.background.paper,
              })}
            >
              <Box
                component={Link}
                href={{ pathname: "/MainPage", query: { data: isDarkMode } }}
              >
                <ArrowBackIcon />
              </Box>
              <Box className={"page-header-right-pp"} gap={2}>
                <Box
                  component={"p"}
                  className="shop-title"
                  data-first-letter="E"
                >
                  E-Commercial
                </Box>
                <ChangeThemeIcon
                  isDarkMode={isDarkMode}
                  toggleTheme={toggleTheme}
                />
              </Box>
            </Box>
            <Box className={"product-detail-info-container"}>
              <Box
                className={"product-detail-info"}
                gap={3}
                sx={(theme: Theme) => ({
                  boxShadow: (theme.shadows as string[])[2],
                  backgroundColor: (theme) => theme.palette.background.paper,
                })}
              >
                <Box
                  component={ProductImages}
                  product={product}
                  isDarkMode={isDarkMode}
                />
                <Box className={"product-text-info-pp"}>
                  <Box
                    component={"p"}
                    className={"product-title-pp"}
                    color={"text.primary"}
                  >
                    {product.title}
                  </Box>
                  <Box className={"product-page-rating-container-pp"}>
                    <ProductRating product={product} />
                    <Box
                      component={"p"}
                      marginLeft={1}
                      color={"secondary.main"}
                      className={"product-page-rating"}
                    >
                      {product.rating}
                    </Box>
                  </Box>
                  <Box className={"product-price-container-pp"} gap={2}>
                    <Box
                      component={"p"}
                      color={"warning.main"}
                      className={"price-with-sale-pp"}
                    >
                      {salePrice}$
                    </Box>
                    <Box
                      component={"p"}
                      color={"secondary.main"}
                      className={"price-without-sale-pp"}
                    >
                      {product.price}$
                    </Box>
                  </Box>
                  <Box
                    className={"product-detail-info-pp"}
                    gap={1}
                    color={"text.primary"}
                  >
                    <Box component={"p"}>
                      <b>Brand:</b> {product.brand}
                    </Box>
                    <Box component={"p"}>
                      <b>In Stock:</b> {product.stock}
                    </Box>
                    <Box component={"p"}>
                      <b>Category:</b> {product.category}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </ThemeProvider>
    </Box>
  );
}
