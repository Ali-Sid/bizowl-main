import swal from 'sweetalert2';


export const sweetAlertFunction = async (title, body, type, navigate, navigatePath) => {

    swal.fire(
        {
            title,
            text: body,
            icon: type,
            confirmButtonColor: '#1c6ed0',
            confirmButtonText: 'Done',
            allowOutsideClick: false
        }
    ).then((res) => {
        if (res.isConfirmed) {
            navigate(navigatePath)
        }
    })
}

export const sweetAlertMessageFunction = async (title, body, type) => {

    swal.fire(
        {
            title,
            text: body,
            icon: type,
            confirmButtonColor: '#1c6ed0',
            // confirmButtonText: 'Done',
            // allowOutsideClick: false
        }
    )
}