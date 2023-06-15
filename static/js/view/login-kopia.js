let loginWindow = null;
export const show_login = () => {
        if(loginWindow !== null) {
            loginWindow.remove();
        }
loginWindow = document.createElement('div');
loginWindow.innerHTML = `
    <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Login</h4>
                <button type="button" id="close_modal" class="close btn btn-sm btn-danger text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">Close</span>
                </button>
            </div>
            <div class="modal-body mx-3">
                <div class="md-form mb-5">
                <i class="fas fa-envelope prefix grey-text"></i>
                <input type="email" id="defaultForm-email" class="form-control validate">
                <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label>
                </div>

                <div class="md-form mb-4">
                <i class="fas fa-lock prefix grey-text"></i>
                <input type="password" id="defaultForm-pass" class="form-control validate">
                <label data-error="wrong" data-success="right" for="defaultForm-pass">Your password</label>
                </div>

            </div>
            <div class="modal-footer d-flex justify-content-center">
                <button id="login_button" class="btn btn-success text-white">Login</button>
            </div>
            </div>
        </div>
        </div>
`;
     
document.querySelector('body').append(loginWindow);
document.getElementById('close_modal').addEventListener('click', event => {
    event.preventDefault();
    document.getElementById('modalLoginForm').style.display = 'none';
    document.querySelector('body').classList.remove('modal-open');
    document.querySelector('body').removeAttribute('data-bs-padding-right');
    document.querySelector('.modal-backdrop.fade.show').remove();
});

var modal = new bootstrap.Modal(loginWindow.querySelector('.modal'));
modal.show();

document.getElementById('login_button').addEventListener('click', event => {
    console.log('login clicked');
    event.preventDefault();
});

}
