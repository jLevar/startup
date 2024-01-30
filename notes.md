# Notes
## 1/10/24
Today I learned how to resolve merge conflicts in Github. I also learned some new things about markdown that I didn't before.
Such as how to link to another directory: [README](/README.md)
And footnotes[^1]

> [!TIP]
> Continuing to refresh my knowledge and skills in markdown will lead to higher quality documentation for this project

[^1]: Such as this footnote here.

## 1/19/24
AWS and EC2. I now have a server instance running in Virginia. It has an elastic IP address. To ssh into it I need to run the following command:
`ssh -i ~/.ssh/startup-keypair.pem ubuntu@snailspeedway.click`


## 1/22/24
Enabled HTTPS by modifying Caddyfile.

## 1/28/24
[Mozilla's HTML Element Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)


## 1/29/24
Example of deploying simon
`./deployFiles.sh -k ~/.ssh/startup-keypair.pem -h snailspeedway.click -s simon`
