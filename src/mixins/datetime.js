import dayjs from "dayjs";

export default {
    methods: {
        formatDatetime(date) {
            return dayjs(date).format("DD.MM.YYYY hh:mm");
        },
    }
}