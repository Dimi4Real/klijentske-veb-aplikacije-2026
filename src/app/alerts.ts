import Swal from "sweetalert2";

const matCustomClass = {
    popup: 'mat-swal-popup',
    tite: 'mat-swal-title',
    actions: 'mat-swal-acitons',
    confirmButton: 'mat-swal-confirm',
    cancelButton: 'mat-swal-cancel'
}

export class Alerts {
    static success(text: string){
        Swal.fire({
            title: 'Sucsess',
            text,
            icon: 'success',
            customClass: matCustomClass
        })
    }

    static error(text: string){
        Swal.fire({
            title: 'Error',
            text,
            icon: 'error',
            customClass: matCustomClass
        })
    }

    static confirm(text:string, callback: Function) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            customClass: matCustomClass
        }).then((result) => {
            if (result.isConfirmed) {
            callback()
            }
        })
    }
}