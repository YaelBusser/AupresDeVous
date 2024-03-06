import {StyleSheet} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

export const primaryColor = "#317DEE";
export const primaryFont = "Poppins";

const stylesMain = StyleSheet.create({
    header: {
        backgroundColor: "rgba(255,255,255,0.2)",
        marginTop: -20
    },
    AuthFormButton: {
        backgroundColor: primaryColor,
        width: "80%",
        justifyContent: "center",
        borderRadius: 20,
    },
    AuthFormButtonText: {
        color: Colors.white,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: primaryFont,
        padding: 20
    },
    buttonGoBack: {
        padding: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "red",
    },
    test: {
        height: 500
    }
});

export default stylesMain;