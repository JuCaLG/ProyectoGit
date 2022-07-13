import React from "react";
import { Text, FlatList, TouchableOpacity, RefreshControl } from "react-native";
import { Avatar, Card, IconButton } from 'react-native-paper';
//Metodos
import stringToColor from "../Metodos/stringToColor";

export default function ComponenteLista({data, dataCheckbox,keyExtractor,onPress, onLongPress, refreshControl}){
  return(
    <FlatList
      data={data}
      refreshControl={refreshControl}
      keyExtractor={keyExtractor}
      renderItem={({item, index}) => {
        const title = item.toString.title+"";
        const subtitle = item.toString.subtitle+"";
        return (
          <TouchableOpacity 
            onPress={() => onPress(item._id)}
            onLongPress={() => onLongPress(item._id)}>
            <Card.Title
              style={{
                borderColor: "black",
                borderBottomWidth: 1,
                backgroundColor: 
                  (dataCheckbox[item._id]!==undefined)?
                    "#1d7be5": undefined
              }}
              title={title}
              subtitle={subtitle}
              leftStyle={{
                padding: 0,
                margin: 0,
                width: 50,
                height: 50
              }}
              left={() => 
                <IconButton
                  style={{
                    padding: 0,
                    margin: 0,
                    width: "100%",
                    height: "100%"
                  }}
                  onPress={() => onLongPress(item._id)}
                  icon={() => 
                    <Avatar.Text
                      style={{
                        backgroundColor:
                          (dataCheckbox[item._id]!==undefined)?
                          "blue": stringToColor(title)
                      }}
                      size={50}
                      label={title
                        .toUpperCase()
                        .charAt(0)
                      } />
                  }
                />
              }
            />
          </TouchableOpacity>
        )
      }}
    />
  )
}