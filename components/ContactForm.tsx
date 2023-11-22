"use client";
import { LoadingButton } from "@mui/lab";
import {
  TextField,
  Grid,
  InputLabel,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const ContactForm = () => {
  const { control, handleSubmit, reset } = useForm<Inputs>({
    defaultValues,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasError, setHasError] = useState<Error[]>([]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset(defaultValues);
      } else {
        throw new Error("Erro ao enviar email");
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setHasError([...hasError, error]);
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      <Card
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} justifyContent={"center"}>
              <Grid container direction={"column"} item xs={12}>
                <InputText
                  label="Nome"
                  name="name"
                  control={control}
                  rules={{ required: true }}
                />
              </Grid>
              <Grid container direction={"column"} item xs={12}>
                <InputText
                  label="Email"
                  name="email"
                  control={control}
                  rules={{ required: true }}
                />
              </Grid>
              <Grid container direction={"column"} item xs={12}>
                <InputText
                  label="Mensagem"
                  name="message"
                  control={control}
                  rules={{ required: true }}
                />
              </Grid>
              <Grid container item xs={12}>
                <LoadingButton
                  loading={isLoading}
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                >
                  Enviar
                </LoadingButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        open={isSuccess}
        autoHideDuration={6000}
        onClose={() => setIsSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" onClose={() => setIsSuccess(false)}>
          Email enviado com sucesso!.
        </Alert>
      </Snackbar>
      <Snackbar
        open={hasError.length > 0}
        autoHideDuration={6000}
        onClose={() => setHasError([])}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="error" onClose={() => setHasError([])}>
          Erro ao enviar email.
        </Alert>
      </Snackbar>
    </>
  );
};

type InputTextProps = {
  label: string;
  name: string;
  control: any;
  rules: any;
};

const InputText = ({ label, name, control, rules }: InputTextProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <>
          <InputLabel>{label}</InputLabel>
          <TextField
            style={{
              backgroundColor: "#fff",
            }}
            required={rules.required}
            {...field}
          />
        </>
      )}
    />
  );
};
