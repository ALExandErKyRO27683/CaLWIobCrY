### Unreleased

  * Remove `SecretKeyFinder` and use `app.secret_key_base` as the default secret key for `Devise.secret_key` if a custom `Devise.secret_key` is not provided.

    ```

    Now, it always uses `application.secret_key_base`. Make sure you're using the same secret key after the upgrade; otherwise, previously generated tokens for `recoverable`, `lockable`, and `confirmable` will be invalid.
* enhancements
  * Add Rails 8 support.
  * Password length validator is changed from

    ```
    ```

    to
    ```
    so it's possible to override `password_length` at runtime. (@manojmj92)
for previous changes.