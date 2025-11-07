#include <bits/stdc++.h>
using namespace std;

int main() {

    // no. test cases
    int t;
    cin >> t;

    for (int i = 0; i < t; i++) {
        // amount of propulsion units
        // have to use long for last test case because int is not large enough
        long n;
        cin >> n;

        // calculate min and max or impossible
        // is impossible if %4 or %6 remainder of 1,3,5
        if (n % 4 == 1 || n % 4 == 3 || n % 6 == 1 || n % 6 == 3 || n % 6 == 5) {
            cout << -1 << endl;
        } else {
            // now min 
            long min;
            // we want to %6
            // if %6 == 2 then we can use 2 4s instead (take divided number + 1)
            // if %6 == 4 then we can use a 6 and then 4 (take divided number + 1)
            // if %6 == 0 then we just take the divided number
            if (n % 6 == 2) {
                min = n / 6 + 1;
            } else if (n % 6 == 4) {
                min = n / 6 + 1;
            } else if (n % 6 == 0) {
                min = n / 6;
            }
            
            // now max
            long max;
            // want to % 4
            // if % 4 == 0 then just take divided number
            // if % 4 == 2 then just taake divided number because instead of 4 we just use 6
            if (n % 4 == 0) {
                max = n / 4;
            } else if (n % 4 == 2) {
                max = n / 4;
            }
            cout << min << " " << max << endl;
        }
    }

    return 0;
}