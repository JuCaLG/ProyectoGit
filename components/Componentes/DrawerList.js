import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton, Drawer, List } from 'react-native-paper';

const DrawerLabel = ({ text, style }) => {
  return <Text style={style}>{text}</Text>;
};

const DrawerIcon = ({ icon, style, color, size }) => {
  return <IconButton style={style} icon={icon} color={color} size={size} />;
};

const DrawerList = ({listAccordion, color, colorIcons,iconsSize, style, titleStyle, accordionSize, accordionColor, accordionStyle, iconItemColor, iconItemSize, itemStyle, navigate}) => {
  const [expanded, setExpanded] = useState(-1);
  if (
    (listAccordion !== null || listAccordion !== undefined) &&
    Array.isArray(listAccordion)
  ) {
    return listAccordion.map((item,index) => {
      return (
        <List.Accordion
          title={item.title}
          left={() => (item.icon) &&
            <List.Icon 
              style={{margin:0}}
              color={colorIcons} 
              icon={item.icon}/>
          }
          right={() => <List.Icon 
            style={[
              {margin:0},
            ]}
            color={colorIcons}
            icon={(index==expanded)? 
              "chevron-down":
              "chevron-up"
            }/>
          }
          id={index}
          expanded={(index==expanded)? true:false}
          onPress={() =>setExpanded((index!=expanded)? index:-1)}
          style={[
            {
              borderRadius: 5,
              marginLeft: 9,
              marginRight: 9,
              padding: 0,
            },
            style
          ]}
          titleStyle={titleStyle}
          theme={{colors: {background: color}}}>
          <ListItem 
            listItem={item.listItem} 
            itemStyle={itemStyle} 
            iconItemColor={iconItemColor}
            iconItemSize={iconItemSize}
            navigate={navigate}/>
        </List.Accordion>
      );
    });
  }
};

const ListItem = ({listItem, iconItemColor, iconItemSize, itemStyle, navigate }) => {
  if (
    (listItem !== null || listItem !== undefined) &&
    Array.isArray(listItem)
  ) {
    return listItem.map((item) => {
      return (
        <List.Item
          style={[
            {
              marginLeft: 9,
              marginRight: 9,
              padding: 0,
            },
            itemStyle
          ]}
          onPress={ () => navigate(item.go, item.params) }
          title={item.label}
          left={() => <List.Icon
            style={{margin:0}}
            color={iconItemColor} 
            size={iconItemSize}
            icon={item.icon}/>}
        />
      );
    });
  }
};

export default DrawerList;

const estilo = StyleSheet.create({
  
});
