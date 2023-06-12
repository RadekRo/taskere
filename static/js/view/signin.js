var signinWindow = null;
export const show_signin = () => {
        if(signinWindow !== null) {
            signinWindow.remove();
        }
signinWindow = document.createElement('div');
signinWindow.innerHTML = `
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">User registration</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Add your username</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Save</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close!</button>
            </div>
            </div>
        </div>
    </div>
`;
     
document.querySelector('body').append(signinWindow);

var modal = new bootstrap.Modal(signinWindow.querySelector('.modal'));
modal.show();
}


