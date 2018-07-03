#!/bin/bash
#rm -rf *.realm*
adb exec-out run-as com.shoppinglist cat files/default.realm > /var/www/ShoppingList/default.realm
