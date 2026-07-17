import {
  Box,
  Button,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import MainLayout from "../../layouts/MainLayout";

export default function Login() {
    return (
        <MainLayout>

            <Paper
                elevation={8}
                sx={{
                    width: "100%",
                    p: 4,
                    borderRadius: 4,
                }}
            >

                <Stack spacing={3}>

                    <Box>

                        <Typography
                            variant="h4"
                            sx={{ fontWeight: 700 }}
                        >
                            Bem-vindo
                        </Typography>

                        <Typography
                            color="text.secondary"
                        >
                            Faça login para continuar
                        </Typography>

                    </Box>

                    <TextField
                        label="Email"
                        fullWidth
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        fullWidth
                    />

                    <Button
                        variant="contained"
                        size="large"
                    >
                        Entrar
                    </Button>

                    <Typography
                        sx={{ mt: 2 }}
                    >
                        Não possui uma conta?{" "}
                        <Link
                            href="/register"
                            underline="hover"
                        >
                            Criar conta
                        </Link>
                    </Typography>

                </Stack>

            </Paper>

        </MainLayout>
    );
}