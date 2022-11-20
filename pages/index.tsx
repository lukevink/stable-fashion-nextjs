import * as React from "react";
import type { NextPage } from "next";
import { t } from "@lingui/macro";

import {
  Box,
  Button,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";

import Link from "../src/Link";
import MyAppBar from "../src/MyAppBar";
import Image from "next/image";
import { useRouter } from "next/router";

const Start: NextPage = () => {
  const router = useRouter();

  const itemData = [
    {
      title: t`Text to Image`,
      href: "/txt2img",
      img: "/img/pages/txt2img.png",
      alt: "txt2img example",
    },
    {
      title: t`Image to Image`,
      href: "/img2img",
      img: "/img/pages/img2img.png",
      alt: "img2img example",
    },
    {
      title: t`Inpainting`,
      href: "/inpaint",
      img: "/img/pages/inpaint.png",
      alt: "inpaint example",
    },
    {
      title: t`Upsampling`,
      href: "/upsample",
      img: "/img/pages/upsample.png",
      alt: "upsample example",
    },
  ];

  return (
    <>
      <MyAppBar title={t`Home`} />
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="h1" gutterBottom>
            Stable Fashion
          </Typography>
          <Grid container spacing={2} width="100%">
            {itemData.map((item) => (
              <Grid key={item.href} xs={6} sm={4} md={3} lg={3} xl={3}>
                <Box
                  sx={{
                    p: 0,
                    m: 0,
                    background: "#eee",
                    border: "1px solid #aaa",
                    borderRadius: "12px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                  onClick={() => router.push(item.href)}
                >
                  <Image
                    layout="responsive"
                    width={150}
                    height={150}
                    src={item.img}
                    alt={item.title}
                  />
                </Box>

                <Button
                  fullWidth
                  component={Link}
                  href={item.href}
                  variant="contained"
                  sx={{ my: 1 }}
                >
                  {item.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>


      </Container>
    </>
  );
};

export default Start;
