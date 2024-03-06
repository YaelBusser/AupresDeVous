import {StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    sectionPresentation: {
        marginTop: "auto",
        marginBottom: 50,
        alignItems: "center"
    },
    blockText: {
        width: "80%",
        marginBottom: 40
    },
    text: {
        color: Colors.white,
    },
    title: {
        fontSize: 16
    },
    subTitle: {
        fontSize: 34
    },
    blockButtons: {
        alignItems: "center",
        gap: 10,
        width: "100%"
    }
});

export default styles;