#include <bits/stdc++.h>
using namespace std;


int main() {
    // first integer t is number of cases
    int t;
    cin >> t;
    // then for next no of lines if second integer is even, print 0 else print first num
    for (int i = 0; i < t; i++) {
        int a, b;
        cin >> a >> b;
        if (b % 2 == 0) {
            cout << 0 << endl;
        } else {
            cout << a << endl;
        }
    }

    return 0;
}