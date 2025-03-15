import { Http } from '../core/http'
let config = {
    api: Http.apiHost,
    // Customer
    GetListCustomer: '/api/customer',
    CreateCustomer: '/api/customer',
    UpdateCustomer: '/api/customer/{id}/update',
    DeleteCustomer: '/api/customer/{id}',
    GetCustomer: '/api/customer/{id}',
    // Customer

    //Room
    GetListRoom: '/api/room',
    CreateRoom: '/api/room',
    UpdateRoom: '/api/room/{id}/update',
    DeleteRoom: '/api/room/{id}',
    GetRoom: '/api/room/{id}',
    //Room


    //Staff
    GetListStaff: '/api/staff',
    CreateStaff: '/api/staff',
    UpdateStaff: '/api/staff/{id}/update',
    DeleteStaff: '/api/staff/{id}',
    GetStaff: '/api/staff/{id}',
    //Staff

    //RoomType
    GetListRoomType: '/api/roomtype',
    //RoomType

    //RoomService
    GetListService: '/api/service',
    GetService: '/api/service/{id}',
    CreateService: '/api/service',
    DeleteService: '/api/service/{id}',
    //RoomService

    //Booking
    GetListBooking: '/api/booking',
    GetBooking: '/api/booking/{id}',
    CreateBooking: '/api/booking',
    //Booking

    //Facility
    GetListFacility: '/api/facility',
    //Facility

    //Status
    GetListStatus: '/api/status',
    //Status

    //Introduce
    GetRoomDetail: '/api/room/{id}'
    //Introduce

}

let api = new Proxy(config, {
    get(target, name) {
        if (name === 'host_user') return Reflect.get(target, name)
        if (name !== 'params') {
            return (
                Reflect.get(target, 'api').replace(/\/$/, '') +
                Reflect.get(target, name)
            )
        } else {
            return Reflect.get(target, name)
        }
    },
})

api.params = (name, options) => {
    try {
        let endpoint = api[name]
        for (let value in options) {
            if (value && Object.prototype.hasOwnProperty.call(options, value)) {
                endpoint = endpoint.replace(`{${value}}`, options[value])
            }
        }
        return endpoint
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            console.log(e)
        }
    }
}

export default api
