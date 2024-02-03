import { governorates, cities } from "@/app/components/data/cities";

const formattedGovernorates = governorates.map((governorate) => ({
    id: governorate.id,
    value: governorate.governorate_name_ar,
    name: governorate.governorate_name_ar,
    name_en: governorate.governorate_name_en,
}));

const formattedCity = cities.map((city) => ({
    id: city.id,
    govId: city.governorate_id,
    value: city.city_name_ar,
    name: city.city_name_ar,
    name_en: city.city_name_en,
}));

export const useCities = () => {
    const getAll = () => formattedGovernorates;

    const getByValue = (value: string) => {
        return formattedGovernorates.find((item) => item.value === value);
    };

    return {
        getAll,
        getByValue,
    };
};

export const useAria = () => {
    const getAll = () => formattedCity;

    const filteredArias = (gavId: string) => {
        formattedCity.filter((item) => item.govId === gavId);
    };

    return {
        getAll,
        filteredArias,
    };
};
