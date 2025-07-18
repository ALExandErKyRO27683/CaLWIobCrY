### Unreleased

  * Remove `SecretKeyFinder` and use `app.secret_key_base` as the default secret key for `Devise.secret_key` if a custom `Devise.secret_key` is not provided.

    This is potentially a breaking change because Devise previously used the following order to find a secret key:

    ```
    app.credentials.secret_key_base > app.secrets.secret_key_base > application.config.secret_key_base > application.secret_key_base

    Now, it always uses `application.secret_key_base`. Make sure you're using the same secret key after the upgrade; otherwise, previously generated tokens for `recoverable`, `lockable`, and `confirmable` will be invalid.
* enhancements
  * Removed deprecations warning output for `Devise::Models::Authenticatable::BLACKLIST_FOR_SERIALIZATION` (@soartec-lab)
  * Add Rails 8 support.
  * Password length validator is changed from

    ```
    ```

    to

    ```
    validates_length_of :password, minimum: proc { password_length.min }, maximum: proc { password_length.max }, allow_blank: true
    ```
    so it's possible to override `password_length` at runtime. (@manojmj92)
* bug fixes
for previous changes.