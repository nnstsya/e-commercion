import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Box, Theme } from "@mui/system";
import { DarkTheme } from "@/themes/DarkTheme";
import { ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import { ProductData } from "@/types/ProductData";
import { LightTheme } from "@/themes/LightTheme";

interface ProductCardProps {
  productData: ProductData;
  isDarkMode: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  productData,
  isDarkMode,
}) => {
  const salePrice = Math.round(
    productData.price -
      (productData.price / 100) * productData.discountPercentage,
  );
  const dataObject = {
    product: productData,
    isDarkMode,
  };
  const data = JSON.stringify(dataObject);
  const rating = Array.from(
    { length: Math.floor(productData.rating) },
    (_, index) => <StarIcon key={index} className={"rating-mp"} />,
  );

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <Box
        className={"product-card-mp"}
        sx={{
          backgroundColor: (theme: Theme) => ({
            backgroundColor: theme.palette.background.paper,
            boxShadow: (theme.shadows as string[])[2],
          }),
        }}
      >
        <Box
          className={"product-image-container-mp"}
          component={Link}
          href={{
            pathname: "/products/ProductPage",
            query: { data: encodeURIComponent(data) },
          }}
        >
          <img
            className={"product-image-mp"}
            src={productData.thumbnail}
            alt="Product Image"
          />
        </Box>
        <Box className={"product-info-mp"}>
          <Box>
            <Box
              component={"p"}
              className={"product-title-mp"}
              color={"text.primary"}
            >
              {productData.title}
            </Box>
            <Box component={"p"} marginTop={1} color={"secondary.main"}>
              {productData.brand}
            </Box>
            <Box component={"p"} color={"secondary.contrastText"}>
              {productData.category}
            </Box>
          </Box>
          <Box>
            <Box marginTop={1} className={"product-prices"}>
              <Box
                component={"p"}
                className={"price-with-sale-mp"}
                color={"warning.main"}
              >
                {salePrice}$
              </Box>
              <Box
                component={"p"}
                className={"price-without-sale-mp"}
                color={"text.primary"}
              >
                {productData.price}$
              </Box>
            </Box>
            <Box marginTop={1}>{rating}</Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
