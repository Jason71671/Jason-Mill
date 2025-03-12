import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation, apiUrl }) {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        axios.get(`${apiUrl}/goals`)
            .then(response => setGoals(response.data))
            ▋