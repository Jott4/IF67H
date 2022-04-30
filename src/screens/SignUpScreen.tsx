import React, { memo, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { emailValidator, passwordValidator } from "../core/utils";
import TextInput from "../components/TextInput";
import { TextInput as TextInputPaper } from "react-native-paper";

import Button from "../components/Button";
import { theme } from "../core/theme";
import { Navigation } from "../types/navigation";
import LogoText from "../components/LogoText";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const saveUser = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw Error("Cannot create user");
  }
};

type SignUpProps = {
  navigation: Navigation;
};

const SignUpScreen = ({ navigation }: SignUpProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(true);

  const _onSignUpPressed = async () => {
    setIsLoading(true);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setIsLoading(false);
      return;
    }
    if (password.value.length < 6) {
      setPassword({
        ...password,
        error: "Senha muito curta",
      });
      setIsLoading(false);
      return;
    }

    if (password.value !== confirmPassword.value) {
      setConfirmPassword({
        ...confirmPassword,
        error: "Senha não confere",
      });
      setIsLoading(false);
      return;
    }

    try {
      await saveUser(email.value, password.value);
      navigation.navigate("Login");
    } catch (e) {
      setIsLoading(false);

      setConfirmPassword({
        ...confirmPassword,
        error: "Ops! Algo deu errado, tente novamente",
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 65, height: 65 }}
          source={require("../assets/images/logo.png")}
        />
        <LogoText fontSize={28} />
      </View>
      <Text style={styles.title}>Preencha seus dados do seu cadastro</Text>
      <View style={styles.full}>
        <TextInput
          label="E-mail"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text: string) => setEmail({ value: text, error: "" })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoComplete={false}
        />

        <TextInput
          autoComplete={false}
          label="Senha"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text: string) =>
            setPassword({ value: text, error: "" })
          }
          error={!!password.error}
          errorText={password.error}
          secureTextEntry={passwordVisible}
          right={
            <TextInputPaper.Icon
              name={passwordVisible ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />

        <TextInput
          autoComplete={false}
          label="Repetir Senha"
          returnKeyType="done"
          value={confirmPassword.value}
          onChangeText={(text: string) =>
            setConfirmPassword({ value: text, error: "" })
          }
          error={!!confirmPassword.error}
          errorText={confirmPassword.error}
          secureTextEntry={passwordVisible}
          right={
            <TextInputPaper.Icon
              name={passwordVisible ? "eye" : "eye-off"}
              onPress={() => setPasswordVisible(!passwordVisible)}
            />
          }
        />

        <Button
          mode="contained"
          style={styles.button}
          onPress={_onSignUpPressed}
          loading={isLoading}
          disabled={isLoading}
        >
          Cadastrar
        </Button>
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.background,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  full: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
  },

  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 13,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    color: "white",
  },
  button: {
    backgroundColor: theme.colors.secondary,
  },
  signUp: {
    alignSelf: "flex-end",
    backgroundColor: "#b58d97",
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default memo(SignUpScreen);
