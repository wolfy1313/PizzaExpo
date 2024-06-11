import { Platform } from 'react-native';
import * as Brightness from 'expo-brightness';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';

export function useMaxBrightness(disabled = false) {
  const [originalBrightness, setOriginalBrightness] = useState<number | null>(null);
  const isFocused = useIsFocused();

  const maxBrightness = async () => {
    if (originalBrightness !== null) return;
    console.log("Setting brightness to max...");
    try {
      const currentBrightness = await Brightness.getBrightnessAsync();
      console.log("Current brightness:", currentBrightness);
      setOriginalBrightness(currentBrightness);
      await Brightness.setBrightnessAsync(1);
      console.log("Brightness set to max, current brightness: ", currentBrightness);

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
      setOriginalBrightness(null);
      console.log("Brightness reset to original value.");
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
