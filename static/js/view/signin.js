var signinWindow = null;
export const show_signin = () => {
        if(signinWindow !== null) {
            signinWindow.remove();
        }
signinWindow = document.createElement('div');
signinWindow.innerHTML = `
<div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
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

        <div class="md-form mb-4">
        <i class="fas fa-lock prefix grey-text"></i>
        <input type="password" id="defaultForm-pass retype" class="form-control validate">
        <label data-error="wrong" data-success="right" for="defaultForm-pass">Re-type your password</label>
      </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-default">Sign in</button>
      </div>
    </div>
  </div>
</div>
`;
     
document.querySelector('body').append(signinWindow);

var modal = new bootstrap.Modal(signinWindow.querySelector('.modal'));
modal.show();
}


