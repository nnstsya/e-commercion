import React, { useEffect, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ProductData } from "@/types/ProductData";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Grid } from "@mui/material";
import Search from "@/components/Search";
import axios from "axios";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/app/globals.sass";
import "@/app/page.sass";
import { DarkTheme } from "@/themes/DarkTheme";
import { ThemeProvider } from "@mui/material/styles";
import { LightTheme } from "@/themes/LightTheme";
import { ChangeThemeIcon } from "@/components/ChangeThemeIcon";
import { HandleChangeMode } from "@/hooks/HandleChangeMode";
import { Theme } from "@mui/system";
import { Pagination } from "@/components/Pagination";
import { usePagination } from "@/hooks/Pagination";

const api = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export default function MainPage(): React.JSX.Element {
  const [productData, setProductData] = useState<ProductData[] | null>(null);
  const [searchedProducts, setSearchedProducts] = useState<ProductData[] | []>(
    [],
  );
  const [searchIsNull, setSearchIsNull] = useState<boolean>(true);
  const { isDarkMode, setIsDarkMode, toggleTheme } = HandleChangeMode();

  useEffect(() => {
    api.get("/").then((res) => {
      setProductData(res.data.products);
    });
  }, []);

  function handleSearch(term: string): void {
    const searchTerm = term.toLowerCase();
    setSearchedProducts(
      productData!.filter((product) =>
        product.title.toLowerCase().includes(searchTerm),
      ),
    );
    setSearchIsNull(searchTerm.length === 0);
  }

  const productsToRender = !searchIsNull ? searchedProducts : productData || [];

  const { currentPage, previousPage, nextPage } =
    usePagination<ProductData>(productsToRender);

  const productTemplate = currentPage.map((product) => (
    <Grid
      item
      key={product.id}
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      className={"product-ceil"}
    >
      <ProductCard productData={product} isDarkMode={isDarkMode} />
    </Grid>
  ));

  return (
    <Box className={inter.className}>
      <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        <Box
          className={"main-page-container"}
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
          }}
        >
          <Box
            className={"page-header"}
            sx={(theme: Theme) => ({
              boxShadow: (theme.shadows as string[])[1],
              backgroundColor: (theme) => theme.palette.background.paper,
            })}
            color={"text.primary"}
          >
            <Box component={"p"} className="shop-title" data-first-letter="E">
              E-Commercial
            </Box>
            <Box className={"page-header-right-mp"} gap={2}>
              <Search handleSearch={handleSearch} />
              <SearchIcon />
              <ChangeThemeIcon
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
              />
            </Box>
          </Box>
          <Grid container className={"products"}>
            {productTemplate}
          </Grid>
          <Pagination
            isDarkMode={isDarkMode}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        </Box>
      </ThemeProvider>
    </Box>
  );
}
