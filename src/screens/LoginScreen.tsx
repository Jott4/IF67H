import React, { memo, useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { emailValidator, passwordValidator } from "../core/utils";
import TextInput from "../components/TextInput";
import { TextInput as TextInputPaper } from "react-native-paper";

import Button from "../components/Button";
import { theme } from "../core/theme";
import LogoText from "../components/LogoText";
import { Navigation } from "../types/navigation";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type LoginProps = {
  navigation: Navigation;
};

const login = (email: string, password: string) => {
  const auth = getAuth();
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw Error("Cannot login");
  }
};

const LoginScreen = ({ navigation }: LoginProps) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [isLoading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const _onLoginPressed = async () => {
    setLoading(true);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setLoading(false);
      return;
    }

    try {
      await login(email.value, password.value);
      setEmail({ value: "", error: "" });
      setPassword({ value: "", error: "" });
      setLoading(false);
      setPasswordVisible(false);
      navigation.navigate("Home");
    } catch (e) {
      setPassword({ ...password, error: "Email ou senha não conferem" });
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View />
      <View style={styles.full}>
        <Image
          style={{ width: 135, height: 135 }}
          source={require("../assets/images/logo.png")}
        />
        <LogoText fontSize={40} />
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
          style={{ marginTop: 18 }}
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

        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.label}>Esqueci a senha</Text>
          </TouchableOpacity>
        </View>

        <Button
          mode="contained"
          style={styles.button}
          onPress={_onLoginPressed}
          loading={isLoading}
          disabled={isLoading}
        >
          Entrar
        </Button>
      </View>
      <Button
        mode="contained"
        style={styles.signUp}
        onPress={() => navigation.navigate("SignUp")}
      >
        Cadastre-se
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.background,
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

export default memo(LoginScreen);
