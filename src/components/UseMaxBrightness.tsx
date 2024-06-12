import { Platform } from 'react-native';
import * as Brightness from 'expo-brightness';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

export function useMaxBrightness(disabled = false) {
  const [originalBrightness, setOriginalBrightness] = useState<number | null>(null);
  const isFocused = useIsFocused();

  const requestPermissions = async () => {
    const { status } = await Brightness.requestPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Brightness permission not granted');
    }
    return status === 'granted';
  };

  const maxBrightness = async () => {
    if (originalBrightness !== null) return;
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    console.log("Setting brightness to max...");
    try {
      const currentBrightness = await Brightness.getBrightnessAsync();
      console.log("Current brightness:", currentBrightness);
      setOriginalBrightness(currentBrightness);
      console.log("line 17 original brightness: ", originalBrightness)
      await Brightness.setBrightnessAsync(1);
      console.log("line 19 Brightness set to max, original brightness: ", originalBrightness, "current brightness: ", currentBrightness);

    } catch (error) {
      console.error("Error setting brightness to max:", error);
    }
  };

  const resetBrightness = async () => {
    if (originalBrightness === null) return;
    console.log("Resetting brightness to original value...");
    try {
      if (Platform.OS === 'android') {
        await Brightness.restoreSystemBrightnessAsync();
      } else {
        await Brightness.setBrightnessAsync(originalBrightness);
      }
      console.log("Brightness reset to original value of: ", originalBrightness);
      setOriginalBrightness(null);
    } catch (error) {
      console.error("Error resetting brightness to original value:", error);
    }
  };

  useEffect(() => {
    if (disabled) {
      if (originalBrightness !== null) resetBrightness();
      return;
    }
    if (isFocused) {
      maxBrightness();
    } else {
      resetBrightness();
    }
    return () => {
      resetBrightness();
    };
  }, [disabled, isFocused]);
}

export default useMaxBrightness;
