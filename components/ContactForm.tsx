"use client";
import { LoadingButton } from "@mui/lab";
import { TextField, Grid, InputLabel, Card, CardContent } from "@mui/material";
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

      if (response.status === 200) {
        reset();
      } else if (response.status === 400) {
        throw new Error("Erro ao enviar email");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
    setIsLoading(false);
  };

  return (
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
