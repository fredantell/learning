var register = {};

register.article = function() {
  var html = '' +

    '<article class="registrationform">' +
    '<h2>Registration form</h2>' +
    '<p>We\'re not currently taking registrations for the Roux Academy Conference, but if you want to be placed into our mailing list for more information, please complete the form below.</p>' +

    '<form class="registration form-horizontal" action="#">' +

    '<fieldset id="personalinfo">' +
    '<legend>Personal Info</legend>' +

    '<div class="form-group">' +
    '<label class="col-md-4 control-label" for="myname">Name</label>' +
    '<div class="col-md-8">' +
    '<input class="form-control" type="text" name="myname" id="myname" autofocus placeholder="Last, First" required>' +
    '</div>' +
    '</div>' +

    '<div class="form-group">' +
    '<label class="col-md-4 control-label" for="companyname">Company Name</label>' +
    '<div class="col-md-8">' +
    '<input class="form-control" type="text" name="companybname" id="companyname" />' +
    '</div>' +
    '</div>' +

    '<div class="form-group">' +
    '<label class="col-md-4 control-label" for="myemail">Email</label>' +
    '<div class="col-md-8">' +
    '<input class="form-control" type="email" name="myemail" id="myemail" required autocomplete="off" />' +
    '</div>' +
    '</div>' +
    '</fieldset><!-- personal info -->' +

    '<fieldset id="otherinfo">' +
    '<legend>Other Info</legend>' +

    '<div class="form-group">' +
    '<label class="col-md-4 control-label">Request Type</label>' +
    '<div class="col-md-8">' +
    '<label class="radio">' +
    '<input type="radio" name="requesttype" value="question" /> Question' +
    '</label>' +
    '<label class="radio">' +
    '<input type="radio" name="requesttype" value="comment" /> Comment' +
    '</label>' +
    '</div>' +
    '</div>' +

    '<div class="form-group">' +
    '<label class="col-md-4 control-label">Subscribe</label>' +
    '<div class="controls col-md-8">' +
    '<label class="checkbox">' +
    '<input type="checkbox" id="subscribe" name="subscribe" CHECKED value="yes" />' +
    'Would you like to subscribe to our e-mail list?' +
    '</label>' +
    '</div>' +
    '</div>' +

    '<div class="form-group">' +
    '<label class="col-md-4 control-label" for="reference">How did you hear about the Roux Academy Conference?</label>' +
    '<div class="col-md-8">' +
    '<select class="form-control"  name="reference" id="reference">' +
    '<option>Choose...</option>' +
    '<option value="friend">A friend</option>' +
    '<option value="facebook">Facebook</option>' +
    '<option value="twitter">Twitter</option>' +
    '</select>' +
    '</div>' +
    '</div>' +
    '</fieldset>' +

    '<button class="btn btn-danger" type="submit">Submit</button>' +

    '</form>' +
    '</article>';

  return html;

};

register.aside = function() {
  var html = '' +
    '<aside class="register">' +
    '  <h2>Registration info</h2>' +
    '  <p>Fill <a href="register">our registration form</a> and we\'ll let you know when we begin the registration process. Then, get ready for the best conference in contemporary art.</p>' +
    '  <a href="register" class="btn btn-danger">Register now</a></p>' +
    '</aside>';

  return html;
};

module.exports = register;
