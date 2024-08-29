# ChmodPermissiveMask//pass.py
os.chmod(var1, var2)
# ChmodPermissiveMask//fail.py
os.chmod(var, stat.S_IWOTH)