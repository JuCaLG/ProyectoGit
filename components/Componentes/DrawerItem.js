import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { IconButton, Drawer, List } from 'react-native-paper';

const DrawerLabel = ({text, style}) => {
  return (
    <Text style={style}>
      {text}
    </Text>
  );
}

const DrawerIcon = ({icon, style, color, size}) => {
  return (
    <List.Icon 
      style={style} 
      icon={icon}
      color={color}
      size={size}/>
  );
}

function DrawerItem({style,styleLabel,label,styleIcon,colorIcon, sizeIcon, icon, onPress}){
  return (
      <Drawer.Item
        style={style}
        icon={() =>
          <DrawerIcon 
            icon={icon}
            style={styleIcon}
            color={colorIcon}
            size={sizeIcon}>
          </DrawerIcon>
        }
        label={
          <DrawerLabel 
            text={label}
            style={styleLabel}>
          </DrawerLabel>
        }
        onPress={() => onPress()}
      > 
      </Drawer.Item>
  );
}

export default DrawerItem;