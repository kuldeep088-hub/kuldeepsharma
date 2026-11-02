# Project Automation & Repository Rules

## Remote Repository
- **GitHub URL**: `https://github.com/kuldeep088-hub/kuldeepsharma.git`
- **Primary Branch**: `main`

---

## ⚡ Automatic Git Synchronization Rule
**MANDATORY FOR ALL AGENTS & SESSIONS:**
Whenever the user requests any updates, changes, bug fixes, or enhancements:
1. Implement and verify the changes thoroughly.
2. Automatically stage all modified and new files: `git add .`
3. Commit with an informative conventional commit message: `git commit -m "..."`
4. Automatically push to the remote repository: `git push origin main`
5. Report the updated commit to the user.
