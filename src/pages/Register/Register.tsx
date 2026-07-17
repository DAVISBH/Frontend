import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
    Link
} from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

export default function Register() {
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
                            Criar conta
                        </Typography>

                        <Typography color="text.secondary">
                            Preencha os dados para se cadastrar
                        </Typography>

                    </Box>

                    <TextField
                        label="Nome"
                        fullWidth
                    />

                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                    />

                    <TextField
                        label="Senha"
                        type="password"
                        fullWidth
                    />

                    <TextField
                        label="Confirmar senha"
                        type="password"
                        fullWidth
                    />

                    <Button
                        variant="contained"
                        size="large"
                    >
                        Criar conta
                    </Button>

                    <Typography sx={{ textAlign: "center" }}>

                        Já possui uma conta?{" "}

                        <Link
                            component={RouterLink}
                            to="/"
                            underline="hover"
                        >
                            Entrar
                        </Link>

                    </Typography>

                </Stack>

            </Paper>

        </MainLayout>
    );
}