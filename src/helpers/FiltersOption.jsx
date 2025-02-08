

const FiltersOption = () => {
    const genre = [
        { id: 1, label: 'ئاکشن', value: 'ئاکشن' },
        { id: 2, label: 'ڕۆمانسی', value: 'ڕۆمانسی' },
        { id: 3, label: 'دراما', value: 'دراما' },
        { id: 4, label: 'مێژوویی', value: 'مێژوویی' },
        { id: 5, label: 'سەرکێشی ', value: 'سەرکێشی' },
        { id: 6, label: 'کۆمیدی ', value: 'کۆمیدی' },
        { id: 7, label: 'تاوان ', value: 'تاوان' },
        { id: 8, label: 'فەنتازی ', value: 'فەنتازی' },
        { id: 9, label: 'مۆزیکاڵ ', value: 'مۆزیکاڵ' },
        { id: 10, label: 'ژیاننامە ', value: 'ژیاننامە' },
        { id: 11, label: 'جەنگی ', value: 'جەنگی' },
        { id: 12, label: 'زانستی ', value: 'زانستی' },
        { id: 13, label: 'ئەنیمەیشن ', value: 'ئەنیمەیشن' },
        { id: 14, label: 'نهێنی', value: 'نهێنی' }
    ];

    const year = [
        { id: 1, label: '2019', value: '2019' },
        { id: 2, label: '2020', value: '2020' },
        { id: 3, label: '2021', value: '2021' },
        { id: 4, label: '2022', value: '2022' },
        { id: 5, label: '2023', value: '2023' },
        { id: 6, label: '2024', value: '2024' },
        { id: 7, label: '2025', value: '2025' }
    ];

    const sorting = [
        { id: 1, label: 'تازەترین', value: 'newest' },
        { id: 2, label: 'پڕ بینەرترین', value: 'popularity' },
    ];

    return { genre, year, sorting };
};

export default FiltersOption