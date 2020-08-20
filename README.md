# Template Action

This action templates files using handlebarsjs

## Inputs

### `template`

**Required** The input template file path

### `output`

**Required** The output file path

### `vars`

**Required** The variables to use in replacement (expects JSON input)

## Outputs

none

## Example usage

```yaml
uses: project-vagabond/template-action
with:
  template: 'input.template'
  output: 'output.txt'
  vars: |
    {
      "var1": "foo"
      "var2": "bar"
    }
```
