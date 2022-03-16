import React from "react";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import colors from "../Colors";
import TodoModal from "./TodoModal";

class TodoList extends React.Component {
    state = {
        showListVisible: false
    }

    toggleListModal() {
        this.setState({showListVisible: !this.state.showListVisible})
    }

    deleteList = index => {
        let list = this.props.list;
        list.lists.splice(index, 1);

        this.props.updateList(list);
    }

    render( index ) {
        const list = this.props.list;

        const completedCount = list.todos.filter(todo => todo.completed).length;
        const remainingCount = list.todos.length - completedCount;

        return (
            <View>
                <Modal 
                    animationType="slide"
                    visible={this.state.showListVisible}
                    onRequestClose={() => this.toggleListModal()}
                >
                    <TodoModal list={list} 
                    closeModal={() => this.toggleListModal()}
                    updateList={this.props.updateList} 
                    />
                </Modal>
                <Pressable 
                style={[{marginHorizontal: 12, width: 200, alignItems: "center", backgroundColor: list.color }]}
                onPress={() => this.toggleListModal()}
                >
                    <View style={styles.listContainer}>
                    <Text style={styles.listTitle} numberOfLines={1}>
                        {list.name}
                    </Text>

                    <View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.count}>{remainingCount}</Text>
                            <Text style={styles.subtitle}>Restando</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.count}>{completedCount}</Text>
                            <Text style={styles.subtitle}>Completas</Text>
                        </View>
                    </View>
                    <Pressable style={[{ alignItems: "flex-end" }]} onPress={() => this.deleteList(index)}><Text style={{color: "white", paddingTop: 10}}>Excluir Lista</Text></Pressable>
                    </View>
                </Pressable>
            </View>
        )
    }
};
const styles = StyleSheet.create ({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.white,
        marginBottom: 18,
    },
    count: {
        fontSize: 48,
        fontWeight: "200",
        color: colors.white,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: "200",
        color: colors.white,
    },
})

export default TodoList;