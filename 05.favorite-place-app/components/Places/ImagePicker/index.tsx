import { Alert, Image, Text, View } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  ImagePickerAsset,
} from 'expo-image-picker';
import { useState } from 'react';
import styles from './styles';
import OutlinedButton from '../../ui/OutlinedButton';

type ImagePickerProps = {};

const ImagePicker = ({}: ImagePickerProps) => {
  const [pickedImage, setPickedImage] = useState<ImagePickerAsset['uri']>();
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
    if (image.assets) setPickedImage(image.assets[0].uri);
  };

  let imagePreview = <Text>No image taken yet.</Text>;
  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;
