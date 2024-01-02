import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { ProductData } from "@/types/ProductData";
import { DarkTheme } from "@/themes/DarkTheme";
import { LightTheme } from "@/themes/LightTheme";
import { ThemeProvider } from "@mui/material/styles";

interface ProductImagesProps {
  product: ProductData;
  isDarkMode: boolean;
}

export const ProductImages: React.FC<ProductImagesProps> = ({
  product,
  isDarkMode,
}) => {
  const [mainImage, setMainImage] = useState<string>(product.thumbnail);
  const [secondaryImages, setSecondaryImages] = useState<string[]>(
    product.images,
  );

  const updateSecondaryImages = (clickedImage: string): void => {
    setSecondaryImages((prevSecondaryImages: string[]) => {
      const updatedSecondaryImages = prevSecondaryImages.includes(mainImage)
        ? [
            clickedImage,
            ...prevSecondaryImages.filter((image) => image !== clickedImage),
          ]
        : [
            mainImage,
            ...prevSecondaryImages.filter((image) => image !== clickedImage),
          ];
      return updatedSecondaryImages;
    });
  };

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <Box>
        {product && (
          <Grid
            container
            className={"images-container-pp"}
            sx={{
              width: { xs: "90vw", md: "44vw" },
            }}
            gap={2}
          >
            <Grid
              item
              component={"img"}
              src={mainImage}
              className={"main-image-pp"}
              alt={"Product Image"}
            />
            <Grid
              container
              className={"secondary-images-container"}
              sx={{
                width: { md: "5vw", xs: "90vw" },
              }}
            >
              {secondaryImages.map((image, index) => (
                <Grid
                  item
                  className={"secondary-image"}
                  component={"img"}
                  key={index}
                  src={image}
                  alt={"Product Image"}
                  xs={2}
                  md={12}
                  boxShadow={(theme) => (theme.shadows as string[])[3]}
                  onClick={() => {
                    setMainImage(image);
                    updateSecondaryImages(image);
                  }}
                />
              ))}
            </Grid>
          </Grid>
        )}
      </Box>
    </ThemeProvider>
  );
};
