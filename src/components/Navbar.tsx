import React from "react";
import { TouchableOpacity } from "react-native";

import { Appbar, Avatar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "../core/theme";

const Navbar = () => {
  return (
    <Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
      <Appbar.Content
        title={<MaterialCommunityIcons name="twitter" size={40} />}
      />
    </Appbar.Header>
  );
};

export default Navbar;
