import React from 'react';
import { View, Text } from 'react-native';

export default function GoalScreen({ route }) {
    const { goal } = route.params;

    return (
        <View>
            <Text>{goal.title}</Text>
            <Text>{goal.description}</Text>
            {goal.milestones.map((milestone, index) => (
                <Text key={index}>{milestone}</Text>
            ))}
        </View>
    );
}