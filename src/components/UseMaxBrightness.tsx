import { Platform } from 'react-native'
import * as Brightness from "expo-brightness"
import { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

export function useMaxBrightness(disabled: boolean = false) {
  const [originalBrightness, setOriginalBrightness] = useState<number | null>(null)
  const isFocused = useIsFocused();

  const maxBrightness = async () => {
    if (originalBrightness !== null) return;
    console.log("Setting brightness to max . .. ");

    const currentBrightness = await Brightness.getBrightnessAsync();
    setOriginalBrightness(currentBrightness)

    await Brightness.setBrightnessAsync(1)
  }

  const resetBrightness = async () => {
    if (originalBrightness === null) return;

    console.log("resetting brightness to original value...")

    if (Platform.OS === "android") {
      Brightness.restoreSystemBrightnessAsync();
    } else {
      Brightness.setBrightnessAsync(originalBrightness)
    }
    setOriginalBrightness(null)
  }

  useEffect(() => {
    if (disabled) {
      if (originalBrightness !== null) resetBrightness();
      return;
    }
    if (isFocused) {
      maxBrightness()
    } else {
      resetBrightness()
    }
    return () => {
      resetBrightness()
    }
  }, [disabled, isFocused])

}

export default useMaxBrightness
