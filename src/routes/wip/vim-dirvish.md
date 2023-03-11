---
title: Vim Dirvish Plugin
date: [2023-03-11]
---

# The missing spoon of a readme for Dirvish minimalist directory viewer

Dirvish is the lightest directory viewer for (Neo)vim, and fast! And really minimal. Awesome! But WTF! It is so minimal that I had to write this missing spoon of a readme for future me (and others similar to past me) so the fantastic Dirvish can be your main directory viewer with all modern expectations for Neovim or Vim.

---

Except for moving around and opening files and directories, there are some common actions that's excpected a directory viewer can do. Dirvish can of course do that, but in a more (unusual) powerful vim-way, where multiple paths can be sent to a shell script buffer that can be executed.

*When which keys to press is illustrated: “`_`” is cursor position, “`<c-e>`” is "press Ctrl-e" and “`<cr>`” is "press Enter".*


## Single-path actions

There are direct actions that can be performed for the path under the cursor. *Note: Actions for multiple paths (below) can also be used on a single path, and is perhaps the better way—at least with some custom mappings—and more consistent.*

`.` is mapped to append the current file to `:! ` (`:!_ {path}`).

Then, to…

- Remove (`:!rm -fr path`), press:
	- `rm -fr<cr>` to remove path forcefully and recursively (if folder, then all files in it)
- Copy (`:!cp file destination`), press:
	- `cp<c-e> destination<cr>` to copy
- Move (`:!mv file destination`), press:
	- `mv<c-e> destination<cr>` to move


## Multi-path actions

Multi-item actions is done by:

1. Using visual selection or local arglist.
2. `Shdo` command (convenient keymaps `{Visual}.` or `1.`).
3. If needed, edit the script buffer that `Shdo` opens.
4. Confirm with `Z!` or `:!%<cr>`.

### Visual selection

`{Visual}.` is mapped to insert `:Shdo _ {}` into the command-line, where `{}` represents all visual selections.

Then, to…

- Copy (`:Shdo[!] cp {} destination/{}`), press:
	- `cp<c-e> destination/{}<cr>`, or
	- `cp<c-e> destination/{}-append.md<cr>` to move items
- Move (`:Shdo[!] mv {} destination{}`), press:
	- `mv<c-e> destination/{}<cr>`, or
	- `mv<c-e> destination/{}-append.css<cr>` to move items
- Remove (`:Shdo[!] rm {}`), press:
	- `rm -fr<cr>` to remove
- Script (`Shdo[!] {cmd}`), press:
	1. `<cr>` to open script buffer with arguments
	2. Edit with shell commands

Lastly,
edit the script buffer if needed, then `Z!` or `:!%<cr>` to execute it.

### Local arglist

Add files to local arglist -- defaults to `x`.

`1.` inserts `:Shdo!_ {}` into the command-line, where `{}` represents all items in local arglist (note the cursor position requires a space to insert command).

*Note, since absolute paths are used for items added to arglist, `cp` and `mv` with destination from command line can give unexpected results. Rather edit the script file as needed.*

So, to…

- Copy (`:Shdo[!] cp {} destination/{}`), press:
	1. ` cp <cr>`
	2. Edit shell commands in script buffer
- Move (`:Shdo[!] mv {} destination{}`), press:
	1. ` mv <cr>`
	2. Edit shell commands in script buffer
- Remove (`:Shdo[!] rm {}`), press:
	- ` rm -fr<cr>` to remove
- Script (`Shdo[!] {cmd}`), press:
	1. `<cr>` to open script buffer with arguments
	2. Edit shell commands in script buffer

Lastly,
edit the script buffer if needed, then `Z!` or `:!%<cr>` to execute it.


## Tips

- Prepend script buffer any line of shell commands, e.g., `mkdir new-folder`.
- Use visual-block-mode and `$` to select several items in script buffer.


## Gotchas

- Dirvish does not update buffers after manipulating paths.

<style>
	h1, h1 ~ * {
		--space: var(--text-body);
	}

	ol, ul {
		margin-block: 0;
	}
</style>
