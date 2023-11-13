"use client";
import {
  TextField,
  FormControl,
  Button,
  Grid,
  Paper,
  Container,
  InputLabel,
  Card,
  CardContent,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EA1F29",
    },
  },
});

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      const response = fetch(`${API_URL}/email`, {
        method: "POST",
        body: JSON.stringify(data),
      });

      response.then((res) => {
        if (res.status === 200) {
          reset();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
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
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </ThemeProvider>
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
