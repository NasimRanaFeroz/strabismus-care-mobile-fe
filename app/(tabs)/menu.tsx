import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const MenuScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Header Section */}
      <View className="items-center mt-8">
        <Image
          source={require("@/assets/images/doc.png")}
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-lg font-semibold mt-4">Dr. Muhammad Tauhid</Text>
      </View>

      {/* Menu Options */}
      <View className="mt-8">
        <MenuItem title="Wallet" />
        <MenuItem title="Account Settings" />
        <MenuItem title="Change Password" />
        <MenuItem title="Terms & Conditions" external />
        <MenuItem title="News & Blogs" external />
        <MenuItem title="Support" external />
      </View>

      {/* Logout Button */}
      <TouchableOpacity className="bg-[#FF7900] mx-8 mt-auto mb-8 py-3 rounded-lg items-center">
        <Text className="text-white text-lg font-semibold">Logout</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text className="text-center text-gray-500 text-sm mb-4">
        © 2025 StrabismusCare - v1.0.0. All rights reserved.
      </Text>
    </View>
  );
};

interface MenuItemProps {
  title: string;
  external?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, external }) => {
  return (
    <TouchableOpacity className="flex-row items-center justify-between mx-8 py-4 border-b border-gray-200">
      <Text className="text-lg text-gray-700">{title}</Text>
      <Text className="text-gray-400 text-lg">{external ? '↗' : '›'}</Text>
    </TouchableOpacity>
  );
};

export default MenuScreen;
