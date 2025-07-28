### Unreleased

  * Remove `SecretKeyFinder` and use `app.secret_key_base` as the default secret key for `Devise.secret_key` if a custom `Devise.secret_key` is not provided.

  * Add Rails 8 support.
  * Password length validator is changed from
    ```
    ```

    to
    ```
for previous changes.