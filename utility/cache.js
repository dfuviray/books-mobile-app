import { AsyncStorage } from 'react-native';

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);

    if (!item) return null;
    return value;
  } catch {
    console.log(error);
  }
};

export default {
  store,
};
