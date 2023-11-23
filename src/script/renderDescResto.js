import $ from "jquery";

export class RenderDesc {
    constructor(details) {
        this.idImg = details.restaurant.pictureId;
        this.resto = details.restaurant.name;
        this.description = details.restaurant.description;
        this.addressResto = details.restaurant.address;
        this.city = details.restaurant.city;
    }

    render() {
        try {
            $('img').attr('src', `https://restaurant-api.dicoding.dev/images/small/${this.idImg}`),
                $('#name-resto').append(this.resto),
                $('#desc').append(this.description),
                $('figcaption').append(this.addressResto),
                $('#city').append(this.city);

        } catch (error) {
            console.log(error.messege);
        }
    }
}