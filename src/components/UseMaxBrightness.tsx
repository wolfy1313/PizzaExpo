import { Platform } from 'react-native';
import * as Brightness from 'expo-brightness';
import { useEffect, useState, useRef } from 'react';

export function useMaxBrightness(disabled = false) {
  const [originalBrightness, setOriginalBrightness] = useState<number | null>(null);
  const originalBrightnessRef = useRef<number | null>(null)


  const requestPermissions = async () => {
    const { status } = await Brightness.requestPermissionsAsync();
    if (status !== 'granted') {
      console.warn('Brightness permission not granted');
    }
    return status === 'granted';
  };

  const maxBrightness = async () => {
    if (originalBrightnessRef.current !== null) return;
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    console.log("Setting brightness to max...");
    try {
      const currentBrightness = await Brightness.getBrightnessAsync();
      console.log("Current brightness:", currentBrightness);
      setOriginalBrightness(currentBrightness);
      originalBrightnessRef.current = currentBrightness
      console.log("line 17 original brightness: ", originalBrightnessRef.current)
      await Brightness.setBrightnessAsync(1);
      console.log("line 19 Brightness set to max, original brightness: ", originalBrightnessRef.current, "current brightness: ", currentBrightness);

    } catch (error) {
      console.error("Error setting brightness to max:", error);
    }
  };

  const resetBrightness = async () => {
    if (originalBrightnessRef.current === null) return;
    console.log("Resetting brightness to original value...");
    try {
      if (Platform.OS === 'android') {
        await Brightness.restoreSystemBrightnessAsync();
      } else {
        await Brightness.setBrightnessAsync(originalBrightnessRef.current);
      }
      console.log("Brightness reset to original value of: ", originalBrightnessRef.current);
      setOriginalBrightness(null);
    } catch (error) {
      console.error("Error resetting brightness to original value:", error);
    }
  };

  useEffect(() => {
    if (!disabled) {
      maxBrightness()
    } else {
      resetBrightness()
    }

    return () => {
      resetBrightness();
    };
  }, [disabled]);

  useEffect(() => {
    return () => {
      resetBrightness();
    };
  }, []);
}

export default useMaxBrightness;
