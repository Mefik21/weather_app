import dayjs from 'dayjs';

export const convertPressure = (value) => {
    return (value * 0.750063755419211).toFixed(0);
};

export const translateWindDirection = (value) => {
    // восточно-северо-восточный ветер (ENE)
    // восточный ветер (E)
    // восточно-юго-восточный ветер (ESE)
    // юго-восточный ветер (SE)
    // юго-юго-восточный ветер (SSE)
    // южный ветер (S)
    // юго-юго-западный ветер (SSW)
    // юго-западный ветер (SW)
    // западно-юго-западный ветер (WSW)
    // западный ветер (W)
    // западно-северо-западный ветер (WNW)
    // северо-западный ветер (NW)
    // северо-северо-западный ветер (NNW)
    // северный ветер (N)

    const directions = [
        { value: 'ENE', label: 'восточно-северо-восточный ветер' },
        { value: 'E', label: 'восточный ветер' },
        { value: 'ESE', label: 'восточно-юго-восточный ветер' },
        { value: 'SE', label: 'юго-восточный ветер' },
        { value: 'SSE', label: 'юго-юго-восточный ветер' },
        { value: 'S', label: 'южный ветер' },
        { value: 'SSW', label: 'юго-юго-западный ветер' },
        { value: 'SW', label: 'юго-западный ветер' },
        { value: 'WSW', label: 'западно-юго-западный ветер' },
        { value: 'W', label: 'западный ветер' },
        { value: 'WNW', label: 'западно-северо-западный ветер' },
        { value: 'NW', label: 'северо-западный ветер' },
        { value: 'NNW', label: 'северо-северо-западный ветер' },
        { value: 'N', label: 'северный ветер' }
    ];

    return directions.find((dir) => dir.value === value).label;
};

export const getValueDay = (date) => {
    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    if (dayjs().format('YYYY-MM-DD') === date) {
        return 'Сегодня';
    } else if (dayjs().add(1, 'day').format('YYYY-MM-DD') === date) {
        return 'Завтра';
    } else {
        let numberDayWeek = dayjs(date).day() - 1; //-1 для подстановки индекса
        return daysOfWeek[numberDayWeek];
    }
};

export const formatDate = (date, format) => {
    return dayjs(date).format(format);
};
