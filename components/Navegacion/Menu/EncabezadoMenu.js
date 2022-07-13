import React from "react";
import { Avatar, Card, List } from 'react-native-paper';
import { TouchableOpacity } from "react-native"

export default function EncabezadoMenu({avatar,titleStyle,title,subtitleStyle,subtitle,style,iconRight,onPress}){
  return(
    <TouchableOpacity onPress={onPress}>
      <Card.Title
        titleStyle={titleStyle}
        title={title}
        subtitleStyle={subtitleStyle}
        subtitle={subtitle}
        style={style}
        left={() => 
          (avatar!==undefined || avatar!==null)?
          <Avatar.Text 
            size={50} 
            label={
              (typeof(subtitle) === 'string')
              && 
              subtitle.substr(0,2).toUpperCase()
            }/>:
          avatar
        }
        right={() => 
          (iconRight!==undefined ||
            iconRight!==null)?
            <List.Icon  
              color="white"
              icon="chevron-right"
              onPress={onPress}/>:
            iconRight
        }
        />
    </TouchableOpacity>
  )
}