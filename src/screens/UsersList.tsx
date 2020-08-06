import React, {useState, useEffect} from "react";
import {Text, FlatList, StyleSheet, SafeAreaView} from "react-native";
import {handleUsers} from "../utils/logic";
import UserItem from "../components/UserItem";
import {UsersList as UsersListText} from "../consts/pages";
import {NavigationProp} from "@react-navigation/core";
import {User as UserType} from "../types/user";

interface Props {
  navigation: NavigationProp<any, any>;
}

export default (props: Props) => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const i = 0;
    const retries = 0;
    handleUsers(i, retries, (user: UserType) => {
      setUsers((newUsers: UserType[]) => [...newUsers, user]);
    });
  }, []);

  const renderItem = ({item}: {item: UserType}) => {
    return <UserItem item={item} navigation={props.navigation} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{UsersListText.title}</Text>
      <FlatList
        data={users}
        columnWrapperStyle={styles.columnWrapperStyle}
        renderItem={renderItem}
        horizontal={false}
        numColumns={2}
        extraData={users}
        keyExtractor={(item: UserType) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "space-around",
    marginTop: 50
  },
  title: {fontSize: 24, fontWeight: "700", alignSelf: "center", marginBottom: 20},
  columnWrapperStyle: {justifyContent: "space-around"}
});
