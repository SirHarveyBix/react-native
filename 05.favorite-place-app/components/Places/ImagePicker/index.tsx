import { Alert, Button, View } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';

type ImagePickerProps = {};

const ImagePicker = ({}: ImagePickerProps) => {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifypermissions = async () => {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert('you dont allow', 'you must grant acces to your camera');
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const haspermission = await verifypermissions();
    if (haspermission == null) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  };

  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImageHandler}></Button>
    </View>
  );
};

export default ImagePicker;
